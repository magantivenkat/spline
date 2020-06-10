/*
 * Copyright 2019 ABSA Group Limited
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export type IExpression = {}

export interface IAttrRef {
    refId: string
}

export interface IGeneric {
    params: ({ [key: string]: string } | null)
    exprType: string
    children: IExpression[]
    dataTypeId: string
    name: string
}

export interface IGenericLeaf {
    params: ({ [key: string]: string } | null)
    exprType: string
    dataTypeId: string
    name: string
}

export interface IAlias {
    child: IExpression
    alias: string
}

export interface IBinary {
    children: IExpression[]
    dataTypeId: string
    symbol: string
}

export interface IUDF {
    children: IExpression[]
    dataTypeId: string
    name: string
}

export interface ILiteral {
  dataTypeId: string
  value: string
}

