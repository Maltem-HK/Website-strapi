'use strict';

/**
 * Socialnetwork.js controller
 *
 * @description: A set of functions called "actions" for managing `Socialnetwork`.
 */

module.exports = {

  /**
   * Retrieve socialnetwork records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.socialnetwork.search(ctx.query);
    } else {
      return strapi.services.socialnetwork.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a socialnetwork record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.socialnetwork.fetch(ctx.params);
  },

  /**
   * Count socialnetwork records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.socialnetwork.count(ctx.query);
  },

  /**
   * Create a/an socialnetwork record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.socialnetwork.add(ctx.request.body);
  },

  /**
   * Update a/an socialnetwork record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.socialnetwork.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an socialnetwork record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.socialnetwork.remove(ctx.params);
  }
};
