/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DocumentTransferAllOwnershipRequest {
    /**
    * A unique identifier of a workspace member from whom you want to transfer ownership.
    */
    'fromMembershipId'?: string;
    /**
    * A unique identifier of a workspace member to whom you want to transfer ownership.
    */
    'toMembershipId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fromMembershipId",
            "baseName": "from_membership_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "toMembershipId",
            "baseName": "to_membership_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentTransferAllOwnershipRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

