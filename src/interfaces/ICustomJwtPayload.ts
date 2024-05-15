import { JwtPayload } from "jsonwebtoken";

export default interface ICustonJwtPayload extends JwtPayload {
  id: string;
  name: string;
}
