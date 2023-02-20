{
  // Different behaviour based on argument provided
  const differentBehaviour = (something: string | number | boolean) => {
    if (typeof something === 'string') return `${something.length}`;
    else if (typeof something === 'number') return `${something + 1}`;
    else return something ? 'true' : 'false';
  };

  console.log(
    differentBehaviour('Light'),
    differentBehaviour(12),
    differentBehaviour(false)
  );
}
