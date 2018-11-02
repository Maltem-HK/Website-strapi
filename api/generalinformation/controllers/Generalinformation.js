'use strict';

/**
 * Generalinformation.js controller
 *
 * @description: A set of functions called "actions" for managing `Generalinformation`.
 */

module.exports = {

  /**
   * Retrieve generalinformation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.generalinformation.search(ctx.query);
    } else {
      return strapi.services.generalinformation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a generalinformation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.generalinformation.fetch(ctx.params);
  },

  /**
   * Count generalinformation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.generalinformation.count(ctx.query);
  },

  /**
   * Create a/an generalinformation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.generalinformation.add(ctx.request.body);
  },

  /**
   * Update a/an generalinformation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.generalinformation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an generalinformation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.generalinformation.remove(ctx.params);
  }
};
