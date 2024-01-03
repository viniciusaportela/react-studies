import {Component} from "react";

export class ErrorBoundary extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static defaultProps = {
    fallback: <div>Something went wrong.</div>
  }

  static getDerivedStateFromError(error: any) {
    console.log("getDerivedStateFromError", error);
    return { hasError: true, message: error.message };
  }

  static componentDidCatch(error: any, errorInfo: any) {
    console.log("componentDidCatch", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}