import React, {PropsWithChildren} from 'react';

interface ShowFallbackComponentProps {
  showFallback: boolean;
  fallback: React.ReactNode;
}

export const ShowFallbackComponent = ({
  showFallback,
  fallback,
  children,
}: PropsWithChildren<ShowFallbackComponentProps>) => {
  if (showFallback) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
