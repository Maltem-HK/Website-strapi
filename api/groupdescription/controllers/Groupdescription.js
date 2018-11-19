'use strict';

/**
 * Groupdescription.js controller
 *
 * @description: A set of functions called "actions" for managing `Groupdescription`.
 */

module.exports = {

  /**
   * Retrieve groupdescription records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.groupdescription.search(ctx.query);
    } else {
      return strapi.services.groupdescription.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a groupdescription record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.groupdescription.fetch(ctx.params);
  },

  /**
   * Count groupdescription records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.groupdescription.count(ctx.query);
  },

  /**
   * Create a/an groupdescription record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.groupdescription.add(ctx.request.body);
  },

  /**
   * Update a/an groupdescription record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.groupdescription.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an groupdescription record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.groupdescription.remove(ctx.params);
  }
};
