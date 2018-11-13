'use strict';

/**
 * Aboutcontent.js controller
 *
 * @description: A set of functions called "actions" for managing `Aboutcontent`.
 */

module.exports = {

  /**
   * Retrieve aboutcontent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.aboutcontent.search(ctx.query);
    } else {
      return strapi.services.aboutcontent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a aboutcontent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.aboutcontent.fetch(ctx.params);
  },

  /**
   * Count aboutcontent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.aboutcontent.count(ctx.query);
  },

  /**
   * Create a/an aboutcontent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.aboutcontent.add(ctx.request.body);
  },

  /**
   * Update a/an aboutcontent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.aboutcontent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an aboutcontent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.aboutcontent.remove(ctx.params);
  }
};
