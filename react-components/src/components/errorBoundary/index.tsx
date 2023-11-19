import React, { ReactNode } from 'react';
import styles from './error.module.scss';

interface ErrorProps {
  children: ReactNode;
}

interface ErrorState {
  hasError: boolean;
  errorInfo: string;
}

class ErrorBoundary extends React.Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: '',
    };
  }

  static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, errorInfo: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.warn('This error was cached by ERROR BOUNDARY!:\n', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <div className={styles.body}>
            <h1 className={styles.title}>Error has occured</h1>
            <div className={styles.text}>
              {this.state.errorInfo}, please, refresh the page
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
