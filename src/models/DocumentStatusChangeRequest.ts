/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentStatusEnum } from './DocumentStatusEnum';
import { HttpFile } from '../http/http';

export class DocumentStatusChangeRequest {
    'status': DocumentStatusEnum;
    /**
    * Provide “private notes” regarding the manual status change.
    */
    'note'?: string;
    /**
    * Send a notification email about the status change to all recipients.
    */
    'notifyRecipients'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "DocumentStatusEnum",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string",
            "format": ""
        },
        {
            "name": "notifyRecipients",
            "baseName": "notify_recipients",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentStatusChangeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

