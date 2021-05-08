import React, { ReactElement, ReactNode } from "react";

type FullBackRender = (props: {error: Error | null}) => ReactElement;
export class ErrorBoundary extends React.Component<{children: ReactNode, fallbackRender: FullBackRender},{error: Error | null}>{
    state = {error: null}

    static getDerivedStateFromError(error: Error) {
        return error
    }


    render () {
        const {error} = this.state;
        const {children, fallbackRender} = this.props;

        if (error) {
            return fallbackRender;
        }
        return children;
    }
}