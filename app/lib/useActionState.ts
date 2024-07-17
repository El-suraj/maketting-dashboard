import { useState } from 'react';

function useActionState(initialState = {message: null, errors: {}}) {
  const [state, setState] = useState(initialState);

  const setActionState = (newState: Partial<typeof initialState>) => {
    setState((prevState) => ({...prevState, ...newState}));
  };

  return [state, setActionState] as const;
}

export default useActionState;
