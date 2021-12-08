/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentStatusResponse {
    'id'?: string;
    'name'?: string;
    'status'?: string;
    'dateCreated'?: string;
    'dateModified'?: string;
    'dateCompleted'?: string;
    'expirationDate'?: string;
    'version'?: string;
    'uuid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCompleted",
            "baseName": "date_completed",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationDate",
            "baseName": "expiration_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentStatusResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

