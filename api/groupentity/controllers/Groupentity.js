'use strict';

/**
 * Groupentity.js controller
 *
 * @description: A set of functions called "actions" for managing `Groupentity`.
 */

module.exports = {

  /**
   * Retrieve groupentity records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.groupentity.search(ctx.query);
    } else {
      return strapi.services.groupentity.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a groupentity record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.groupentity.fetch(ctx.params);
  },

  /**
   * Count groupentity records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.groupentity.count(ctx.query);
  },

  /**
   * Create a/an groupentity record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.groupentity.add(ctx.request.body);
  },

  /**
   * Update a/an groupentity record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.groupentity.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an groupentity record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.groupentity.remove(ctx.params);
  }
};
