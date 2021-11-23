/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentDetailsResponseLinkedObjects {
    'provider'?: string;
    'entityType'?: string;
    'entityId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "provider",
            "baseName": "provider",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityType",
            "baseName": "entity_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "entityId",
            "baseName": "entity_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentDetailsResponseLinkedObjects.attributeTypeMap;
    }

    public constructor() {
    }
}
