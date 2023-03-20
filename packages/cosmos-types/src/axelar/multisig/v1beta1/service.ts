/* eslint-disable */
import _m0 from "protobufjs/minimal";

import {
  KeygenSessionRequest,
  KeygenSessionResponse,
  KeyIDRequest,
  KeyIDResponse,
  KeyRequest,
  KeyResponse,
  NextKeyIDRequest,
  NextKeyIDResponse,
} from "./query";
import {
  KeygenOptInRequest,
  KeygenOptInResponse,
  KeygenOptOutRequest,
  KeygenOptOutResponse,
  RotateKeyRequest,
  RotateKeyResponse,
  StartKeygenRequest,
  StartKeygenResponse,
  SubmitPubKeyRequest,
  SubmitPubKeyResponse,
  SubmitSignatureRequest,
  SubmitSignatureResponse,
} from "./tx";

export const protobufPackage = "axelar.multisig.v1beta1";

/** Msg defines the multisig Msg service. */
export interface MsgService {
  StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse>;
  SubmitPubKey(request: SubmitPubKeyRequest): Promise<SubmitPubKeyResponse>;
  SubmitSignature(
    request: SubmitSignatureRequest
  ): Promise<SubmitSignatureResponse>;
  RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse>;
  KeygenOptOut(request: KeygenOptOutRequest): Promise<KeygenOptOutResponse>;
  KeygenOptIn(request: KeygenOptInRequest): Promise<KeygenOptInResponse>;
}

export class MsgServiceClientImpl implements MsgService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "axelar.multisig.v1beta1.MsgService";
    this.rpc = rpc;
    this.StartKeygen = this.StartKeygen.bind(this);
    this.SubmitPubKey = this.SubmitPubKey.bind(this);
    this.SubmitSignature = this.SubmitSignature.bind(this);
    this.RotateKey = this.RotateKey.bind(this);
    this.KeygenOptOut = this.KeygenOptOut.bind(this);
    this.KeygenOptIn = this.KeygenOptIn.bind(this);
  }
  StartKeygen(request: StartKeygenRequest): Promise<StartKeygenResponse> {
    const data = StartKeygenRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "StartKeygen", data);
    return promise.then((data) =>
      StartKeygenResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitPubKey(request: SubmitPubKeyRequest): Promise<SubmitPubKeyResponse> {
    const data = SubmitPubKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitPubKey", data);
    return promise.then((data) =>
      SubmitPubKeyResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitSignature(
    request: SubmitSignatureRequest
  ): Promise<SubmitSignatureResponse> {
    const data = SubmitSignatureRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "SubmitSignature", data);
    return promise.then((data) =>
      SubmitSignatureResponse.decode(new _m0.Reader(data))
    );
  }

  RotateKey(request: RotateKeyRequest): Promise<RotateKeyResponse> {
    const data = RotateKeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "RotateKey", data);
    return promise.then((data) =>
      RotateKeyResponse.decode(new _m0.Reader(data))
    );
  }

  KeygenOptOut(request: KeygenOptOutRequest): Promise<KeygenOptOutResponse> {
    const data = KeygenOptOutRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeygenOptOut", data);
    return promise.then((data) =>
      KeygenOptOutResponse.decode(new _m0.Reader(data))
    );
  }

  KeygenOptIn(request: KeygenOptInRequest): Promise<KeygenOptInResponse> {
    const data = KeygenOptInRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeygenOptIn", data);
    return promise.then((data) =>
      KeygenOptInResponse.decode(new _m0.Reader(data))
    );
  }
}

/** Query defines the gRPC querier service. */
export interface QueryService {
  /**
   * KeyID returns the key ID of a key assigned to a given chain.
   * If no key is assigned, it returns the grpc NOT_FOUND error.
   */
  KeyID(request: KeyIDRequest): Promise<KeyIDResponse>;
  /**
   * NextKeyID returns the key ID assigned for the next rotation on a given
   * chain. If no key rotation is in progress, it returns the grpc NOT_FOUND
   * error.
   */
  NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse>;
  /**
   * Key returns the key corresponding to a given key ID.
   * If no key is found, it returns the grpc NOT_FOUND error.
   */
  Key(request: KeyRequest): Promise<KeyResponse>;
  /**
   * KeygenSession returns the keygen session info for a given key ID.
   * If no key is found, it returns the grpc NOT_FOUND error.
   */
  KeygenSession(request: KeygenSessionRequest): Promise<KeygenSessionResponse>;
}

export class QueryServiceClientImpl implements QueryService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "axelar.multisig.v1beta1.QueryService";
    this.rpc = rpc;
    this.KeyID = this.KeyID.bind(this);
    this.NextKeyID = this.NextKeyID.bind(this);
    this.Key = this.Key.bind(this);
    this.KeygenSession = this.KeygenSession.bind(this);
  }
  KeyID(request: KeyIDRequest): Promise<KeyIDResponse> {
    const data = KeyIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeyID", data);
    return promise.then((data) => KeyIDResponse.decode(new _m0.Reader(data)));
  }

  NextKeyID(request: NextKeyIDRequest): Promise<NextKeyIDResponse> {
    const data = NextKeyIDRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "NextKeyID", data);
    return promise.then((data) =>
      NextKeyIDResponse.decode(new _m0.Reader(data))
    );
  }

  Key(request: KeyRequest): Promise<KeyResponse> {
    const data = KeyRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Key", data);
    return promise.then((data) => KeyResponse.decode(new _m0.Reader(data)));
  }

  KeygenSession(request: KeygenSessionRequest): Promise<KeygenSessionResponse> {
    const data = KeygenSessionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "KeygenSession", data);
    return promise.then((data) =>
      KeygenSessionResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
