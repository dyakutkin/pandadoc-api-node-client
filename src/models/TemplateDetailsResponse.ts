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

import { ContentLibraryItemResponseCreatedBy } from './ContentLibraryItemResponseCreatedBy';
import { PricingTablesResponse } from './PricingTablesResponse';
import { TemplateDetailsResponseContentPlaceholders } from './TemplateDetailsResponseContentPlaceholders';
import { TemplateDetailsResponseFields } from './TemplateDetailsResponseFields';
import { TemplateDetailsResponseImages } from './TemplateDetailsResponseImages';
import { TemplateDetailsResponseRoles } from './TemplateDetailsResponseRoles';
import { TemplateDetailsResponseTokens } from './TemplateDetailsResponseTokens';
import { HttpFile } from '../http/http';

export class TemplateDetailsResponse {
    'id'?: string;
    'name'?: string;
    'dateCreated'?: string;
    'dateModified'?: string;
    'createdBy'?: ContentLibraryItemResponseCreatedBy;
    'metadata'?: any;
    'tokens'?: Array<TemplateDetailsResponseTokens>;
    'fields'?: Array<TemplateDetailsResponseFields>;
    'pricing'?: PricingTablesResponse;
    'tags'?: Array<string>;
    'roles'?: Array<TemplateDetailsResponseRoles>;
    'version'?: string;
    'contentPlaceholders'?: Array<TemplateDetailsResponseContentPlaceholders>;
    'images'?: Array<TemplateDetailsResponseImages>;

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
            "name": "createdBy",
            "baseName": "created_by",
            "type": "ContentLibraryItemResponseCreatedBy",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<TemplateDetailsResponseTokens>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<TemplateDetailsResponseFields>",
            "format": ""
        },
        {
            "name": "pricing",
            "baseName": "pricing",
            "type": "PricingTablesResponse",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<TemplateDetailsResponseRoles>",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentPlaceholders",
            "baseName": "content_placeholders",
            "type": "Array<TemplateDetailsResponseContentPlaceholders>",
            "format": ""
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<TemplateDetailsResponseImages>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TemplateDetailsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
