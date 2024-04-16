import IMessage from "./IMessageResponse";

export default interface IErrorResponse extends IMessage {
    stack?: string;
}