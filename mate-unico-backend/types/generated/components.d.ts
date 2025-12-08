import type { Schema, Struct } from '@strapi/strapi';

export interface InventarioVariante extends Struct.ComponentSchema {
  collectionName: 'components_inventario_variante';
  info: {
    description: '';
    displayName: 'Variante';
  };
  attributes: {
    color: Schema.Attribute.String;
    grabado: Schema.Attribute.Boolean;
    nombre: Schema.Attribute.String & Schema.Attribute.Required;
    precio: Schema.Attribute.Decimal & Schema.Attribute.Required;
    sku: Schema.Attribute.String;
    stock: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'inventario.variante': InventarioVariante;
    }
  }
}
