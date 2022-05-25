import { Component, ReactNode } from "react";

type Props = {
  fallback: ReactNode;
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children, fallback } = this.props;
    if (this.state.hasError) {
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundary;
