
const address = (prefix: string, host: string, port: number) => `
  ${prefix}://${host}:${port}/
`;

const listening = address => `Server listening on: ${address}`;

export {
    address,
    listening
}