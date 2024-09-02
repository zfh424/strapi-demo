import type { Schema, Attribute } from '@strapi/strapi';

export interface PdxyCcc extends Schema.Component {
  collectionName: 'components_pdxy_cccs';
  info: {
    displayName: 'ccc';
    icon: 'car';
  };
  attributes: {
    ccy: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'pdxy.ccc': PdxyCcc;
    }
  }
}
