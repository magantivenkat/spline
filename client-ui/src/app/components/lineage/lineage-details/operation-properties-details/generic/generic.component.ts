/*
 * Copyright 2017 ABSA Group Limited
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
import { Component, Input } from '@angular/core'
import { PropertiesComponent } from '../properties/properties.component';
import { OperationProperty } from '../../../../../model/operation/operation-property.models'
import ExtraProperties = OperationProperty.ExtraProperties
import * as _ from 'lodash'
import NativeProperties = OperationProperty.NativeProperties


@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html'
})
export class GenericComponent extends PropertiesComponent {

  extraProperties: ExtraProperties

  @Input() set nativeProperties(props: NativeProperties) {
    const defaultProps = [
      'name'
    ]
    const noDefaultProps = _.omit(props, defaultProps)
    this.extraProperties = OperationProperty.parseExtraOptions(noDefaultProps, this.attributesList)
  }

}
