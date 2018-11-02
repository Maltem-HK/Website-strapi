'use strict';

/**
 * Welcomeword.js controller
 *
 * @description: A set of functions called "actions" for managing `Welcomeword`.
 */

module.exports = {

  /**
   * Retrieve welcomeword records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.welcomeword.search(ctx.query);
    } else {
      return strapi.services.welcomeword.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a welcomeword record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.welcomeword.fetch(ctx.params);
  },

  /**
   * Count welcomeword records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.welcomeword.count(ctx.query);
  },

  /**
   * Create a/an welcomeword record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.welcomeword.add(ctx.request.body);
  },

  /**
   * Update a/an welcomeword record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.welcomeword.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an welcomeword record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.welcomeword.remove(ctx.params);
  }
};
