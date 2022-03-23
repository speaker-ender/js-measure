import * as React from "react"; import { StyledButton } from "../../global/button.styles";
;
import Image from 'next/image';
import enderImage from '../../public/ender-trace-best-small.svg';
import { useClientHook } from "@speaker-ender/react-ssr-tools";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { StyledImage } from "../content/image.styles";
import Paragraph from "../content/paragraph";
import { Header3, Header4, StyledLabel, StyledVisibleLabel } from "../../global/typography";
import { StyledFunctionDemo, StyledFunctionDemoForm } from "./functionsDemo.styles";
import { StyledInput, StyledSelect } from "../../global/input.styles";
import { StyledPanel } from "../../global/panel.styles";
import { StyledTwoColumns } from "../layouts/content/twoColumn.styles";
import { StyledContentItem } from "../layouts/content/contentItem.styles";

type parameterTypes = 'boolean' | 'text' | 'number';

export type parameter = {
    name: string,
    type: parameterTypes,
    optional?: boolean,
    value?: string | boolean | number,
    description?: string,
}

export type componentControl = {
    label: string,
    value?: string | boolean | number,
}

export type cssControl = {
    label: string,
    prop: keyof CSSProperties,
    unit: string
    value: CSSProperties,
}

export type control = cssControl | componentControl;

export interface IFunctionDemo {
    testCallback: (element?: Element, ...additionalParameters: any) => string;
    name?: string;
    parameters?: parameter[];
    cssControls?: cssControl[];
    componentControls?: componentControl[];
    elementTest?: boolean;
}

const FunctionDemo: React.FC<IFunctionDemo> = (props) => {
    const isClient = useClientHook();
    const componentRef = useRef<HTMLDivElement>(null);
    const [valueState, setValueState] = useState('');
    const [parameterState, setParameterState] = useState(props.parameters);
    const [cssControlState, setCssControlState] = useState(props.cssControls);


    const testCallback = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const parameters = parameterState ? parameterState.map((parameter) => parameter.value) : [];
        isClient && setValueState(props.testCallback(
            componentRef.current ? componentRef.current : undefined,
            ...parameters
        )
        )
    }, [props.testCallback, componentRef.current, setValueState, isClient])

    const handleParameterChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
        if (!!parameterState) {
            let newParameterState = parameterState;
            let newParameter = parameterState[index];

            switch (newParameter.type) {
                case 'boolean':
                    newParameter.value = (e.target.value === 'true') || false;
                    break;
                default:
                    newParameter.value = e.target.value;
            }

            newParameterState[index] = newParameter;
            !!isClient && setParameterState([...newParameterState]);
        }
    }, [parameterState, setParameterState, isClient])

    const handleCssControlChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, index: number) => {
        if (!!cssControlState) {
            let newCSSControlState = cssControlState;
            let newCSSControl = cssControlState[index];

            switch (newCSSControl.unit) {
                case 'px':
                    newCSSControl.value = { [newCSSControl.prop]: e.target.value };
                    break;
                default:
                    newCSSControl.value = { [newCSSControl.prop]: e.target.value };
            }

            newCSSControlState[index] = newCSSControl;
            !!isClient && setCssControlState([...newCSSControlState]);
        }
    }, [cssControlState, setCssControlState, isClient])

    return (
        <StyledFunctionDemo>
            <Header3>Test</Header3>
            <StyledTwoColumns>
                <StyledImage ref={componentRef} style={cssControlState ? cssControlState.reduce((cssObj, cssProp) => { return cssObj = { ...cssObj, ...cssProp.value } }, {} as CSSProperties) : {}}>
                    <Image src={enderImage} layout="responsive"></Image>
                </StyledImage>
                <StyledContentItem>
                    <StyledPanel>
                        <Header4>CSS Properties</Header4>
                        {props.cssControls && props.cssControls.map((control: control, index) =>
                            <div key={`${index}`}>
                                <StyledVisibleLabel>{control.label}</StyledVisibleLabel>
                                <StyledInput
                                    type={'text'}
                                    placeholder={control.label}
                                    value={cssControlState && !!cssControlState[index].value && cssControlState[index].value[cssControlState[index].prop]}
                                    onChange={(e) => handleCssControlChange(e, index)}
                                />
                            </div>
                        )}
                    </StyledPanel>

                    <StyledPanel>
                        <StyledFunctionDemoForm onSubmit={testCallback}>
                            {`${props.name}(`}
                            {props.parameters && props.parameters.map((parameter, index) =>
                                <div key={`${index}`}>
                                    <StyledVisibleLabel>{`${parameter.name}: `}</StyledVisibleLabel>
                                    {parameter.type === 'boolean' ?
                                        <StyledSelect
                                            onChange={(e) => handleParameterChange(e, index)}
                                        >
                                            <option value="true">true</option>
                                            <option value='false'>false</option>
                                        </StyledSelect>
                                        : <StyledInput
                                            type={parameter.type}
                                            onChange={(e) => handleParameterChange(e, index)}
                                        />
                                    }
                                </div>
                            )}
                            {`) => ${valueState}`}
                            <StyledButton type='submit'>Test</StyledButton>
                        </StyledFunctionDemoForm>
                    </StyledPanel>
                </StyledContentItem>
            </StyledTwoColumns>
        </StyledFunctionDemo>
    )
}

export default FunctionDemo;