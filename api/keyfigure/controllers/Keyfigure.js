'use strict';

/**
 * Keyfigure.js controller
 *
 * @description: A set of functions called "actions" for managing `Keyfigure`.
 */

module.exports = {

  /**
   * Retrieve keyfigure records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.keyfigure.search(ctx.query);
    } else {
      return strapi.services.keyfigure.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a keyfigure record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.keyfigure.fetch(ctx.params);
  },

  /**
   * Count keyfigure records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.keyfigure.count(ctx.query);
  },

  /**
   * Create a/an keyfigure record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.keyfigure.add(ctx.request.body);
  },

  /**
   * Update a/an keyfigure record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.keyfigure.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an keyfigure record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.keyfigure.remove(ctx.params);
  }
};
