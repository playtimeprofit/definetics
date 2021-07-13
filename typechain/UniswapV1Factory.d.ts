/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface UniswapV1FactoryInterface extends ethers.utils.Interface {
  functions: {
    "initializeFactory(address)": FunctionFragment;
    "createExchange(address)": FunctionFragment;
    "getExchange(address)": FunctionFragment;
    "getToken(address)": FunctionFragment;
    "getTokenWithId(uint256)": FunctionFragment;
    "exchangeTemplate()": FunctionFragment;
    "tokenCount()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "initializeFactory",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createExchange",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getExchange", values: [string]): string;
  encodeFunctionData(functionFragment: "getToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTokenWithId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeTemplate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenCount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "initializeFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenWithId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeTemplate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenCount", data: BytesLike): Result;

  events: {
    "NewExchange(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewExchange"): EventFragment;
}

export class UniswapV1Factory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: UniswapV1FactoryInterface;

  functions: {
    initializeFactory(
      template: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initializeFactory(address)"(
      template: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    createExchange(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "createExchange(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getExchange(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    "getExchange(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    getToken(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    "getToken(address)"(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    getTokenWithId(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    "getTokenWithId(uint256)"(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      out: string;
      0: string;
    }>;

    exchangeTemplate(overrides?: CallOverrides): Promise<{
      out: string;
      0: string;
    }>;

    "exchangeTemplate()"(overrides?: CallOverrides): Promise<{
      out: string;
      0: string;
    }>;

    tokenCount(overrides?: CallOverrides): Promise<{
      out: BigNumber;
      0: BigNumber;
    }>;

    "tokenCount()"(overrides?: CallOverrides): Promise<{
      out: BigNumber;
      0: BigNumber;
    }>;
  };

  initializeFactory(
    template: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initializeFactory(address)"(
    template: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  createExchange(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "createExchange(address)"(
    token: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getExchange(token: string, overrides?: CallOverrides): Promise<string>;

  "getExchange(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getToken(exchange: string, overrides?: CallOverrides): Promise<string>;

  "getToken(address)"(
    exchange: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getTokenWithId(
    token_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getTokenWithId(uint256)"(
    token_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  exchangeTemplate(overrides?: CallOverrides): Promise<string>;

  "exchangeTemplate()"(overrides?: CallOverrides): Promise<string>;

  tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    initializeFactory(
      template: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initializeFactory(address)"(
      template: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createExchange(token: string, overrides?: CallOverrides): Promise<string>;

    "createExchange(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getExchange(token: string, overrides?: CallOverrides): Promise<string>;

    "getExchange(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getToken(exchange: string, overrides?: CallOverrides): Promise<string>;

    "getToken(address)"(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getTokenWithId(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getTokenWithId(uint256)"(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    exchangeTemplate(overrides?: CallOverrides): Promise<string>;

    "exchangeTemplate()"(overrides?: CallOverrides): Promise<string>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    NewExchange(token: string | null, exchange: string | null): EventFilter;
  };

  estimateGas: {
    initializeFactory(
      template: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initializeFactory(address)"(
      template: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    createExchange(token: string, overrides?: Overrides): Promise<BigNumber>;

    "createExchange(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getExchange(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getExchange(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(exchange: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getToken(address)"(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenWithId(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenWithId(uint256)"(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeTemplate(overrides?: CallOverrides): Promise<BigNumber>;

    "exchangeTemplate()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokenCount(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenCount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    initializeFactory(
      template: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initializeFactory(address)"(
      template: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    createExchange(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "createExchange(address)"(
      token: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getExchange(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getExchange(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getToken(address)"(
      exchange: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenWithId(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenWithId(uint256)"(
      token_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangeTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "exchangeTemplate()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenCount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
