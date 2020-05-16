import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hello = ({ compiler, framework }: HelloProps) => {
  return (
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  );
};
export default Hello;
