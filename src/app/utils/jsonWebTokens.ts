import jwt_decode, { JwtPayload } from 'jwt-decode';

interface JsonWTPaylaod extends JwtPayload {
  typ: string;
}

export const isValidToken = (token: string): boolean => {
  jwt_decode(token, { header: true });
  const decodedSandboxToken: JsonWTPaylaod = jwt_decode(token);
  const isValid =
    decodedSandboxToken.typ === 'SANDBOX' ||
    decodedSandboxToken.iss === 'issuer-sandbox';
  return isValid;
};
