import {PropsWithChildren} from 'react';

import {ShowFallbackComponent} from './ShowFallbackComponent';
import {Center} from '../Center';
import {ActivityIndicator} from '../ActivityIndicator';

interface LoadingFallbackProps {
  isLoading: boolean;
}

export function LoadingFallback({
  isLoading,
  children,
}: PropsWithChildren<LoadingFallbackProps>) {
  return (
    <ShowFallbackComponent
      showFallback={isLoading}
      fallback={
        <Center>
          <ActivityIndicator />
        </Center>
      }>
      {children}
    </ShowFallbackComponent>
  );
}
