'use strict';

module.exports = {
  'plugin::upload.file': {
    collectionName: 'files',
    info: { singularName: 'file', pluralName: 'files', displayName: 'File', description: '' },
    options: {},
    pluginOptions: {
      'content-manager': { visible: false },
      'content-type-builder': { visible: false },
    },
    attributes: {
      name: { type: 'string', configurable: false, required: true },
      alternativeText: { type: 'string', configurable: false },
      caption: { type: 'string', configurable: false },
      width: { type: 'integer', configurable: false },
      height: { type: 'integer', configurable: false },
      formats: { type: 'json', configurable: false },
      hash: { type: 'string', configurable: false, required: true },
      ext: { type: 'string', configurable: false },
      mime: { type: 'string', configurable: false, required: true },
      size: { type: 'decimal', configurable: false, required: true },
      url: { type: 'string', configurable: false, required: true },
      previewUrl: { type: 'string', configurable: false },
      provider: { type: 'string', configurable: false, required: true },
      provider_metadata: { type: 'json', configurable: false },
      related: { type: 'relation', relation: 'morphToMany', configurable: false },
      folder: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'plugin::upload.folder',
        inversedBy: 'files',
        private: true,
      },
      folderPath: { type: 'string', min: 1, required: true, private: true },
      createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
      createdBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
      updatedBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
    },
    indexes: [
      { name: 'upload_files_folder_path_index', columns: ['folder_path'], type: null },
      { name: 'upload_files_created_at_index', columns: ['created_at'], type: null },
      { name: 'upload_files_updated_at_index', columns: ['updated_at'], type: null },
      { name: 'upload_files_name_index', columns: ['name'], type: null },
      { name: 'upload_files_size_index', columns: ['size'], type: null },
      { name: 'upload_files_ext_index', columns: ['ext'], type: null },
    ],
    kind: 'collectionType',
    modelType: 'contentType',
    modelName: 'file',
    connection: 'default',
    uid: 'plugin::upload.file',
    plugin: 'upload',
    globalId: 'UploadFile',
  },
  'plugin::upload.folder': {
    collectionName: 'upload_folders',
    info: { singularName: 'folder', pluralName: 'folders', displayName: 'Folder' },
    options: {},
    pluginOptions: {
      'content-manager': { visible: false },
      'content-type-builder': { visible: false },
    },
    attributes: {
      name: { type: 'string', min: 1, required: true },
      pathId: { type: 'integer', unique: true, required: true },
      parent: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'plugin::upload.folder',
        inversedBy: 'children',
      },
      children: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'plugin::upload.folder',
        mappedBy: 'parent',
      },
      files: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'plugin::upload.file',
        mappedBy: 'folder',
      },
      path: { type: 'string', min: 1, required: true },
      createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
      createdBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
      updatedBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
    },
    indexes: [
      { name: 'upload_folders_path_id_index', columns: ['path_id'], type: 'unique' },
      { name: 'upload_folders_path_index', columns: ['path'], type: 'unique' },
    ],
    kind: 'collectionType',
    modelType: 'contentType',
    modelName: 'folder',
    connection: 'default',
    uid: 'plugin::upload.folder',
    plugin: 'upload',
    globalId: 'UploadFolder',
  },
  'api::kitchensink.kitchensink': {
    kind: 'collectionType',
    collectionName: 'kitchensinks',
    info: {
      displayName: 'Kitchen Sink',
      singularName: 'kitchensink',
      pluralName: 'kitchensinks',
      description: '',
      name: 'Kitchen Sink',
    },
    options: { draftAndPublish: true },
    pluginOptions: {},
    attributes: {
      short_text: { type: 'string' },
      long_text: { type: 'text' },
      rich_text: { type: 'richtext' },
      integer: { type: 'integer' },
      biginteger: { type: 'biginteger' },
      decimal: { type: 'decimal' },
      float: { type: 'float' },
      date: { type: 'date' },
      datetime: { type: 'datetime' },
      time: { type: 'time' },
      timestamp: { type: 'timestamp' },
      boolean: { type: 'boolean' },
      email: { type: 'email' },
      password: { type: 'password' },
      enumeration: { type: 'enumeration', enum: ['A', 'B', 'C', 'D', 'E'] },
      single_media: {
        type: 'media',
        multiple: false,
        required: false,
        allowedTypes: ['images', 'files', 'videos'],
      },
      multiple_media: {
        type: 'media',
        multiple: true,
        required: false,
        allowedTypes: ['images', 'files', 'videos'],
      },
      json: { type: 'json' },
      single_compo: { type: 'component', repeatable: false, component: 'basic.simple' },
      repeatable_compo: { type: 'component', repeatable: true, component: 'basic.simple' },
      dynamiczone: { type: 'dynamiczone', components: ['basic.simple', 'blog.test-como'] },
      one_way_tag: { type: 'relation', relation: 'oneToOne', target: 'api::tag.tag' },
      one_to_one_tag: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'api::tag.tag',
        private: true,
        inversedBy: 'one_to_one_kitchensink',
      },
      one_to_many_tags: {
        type: 'relation',
        relation: 'oneToMany',
        target: 'api::tag.tag',
        mappedBy: 'many_to_one_kitchensink',
      },
      many_to_one_tag: {
        type: 'relation',
        relation: 'manyToOne',
        target: 'api::tag.tag',
        inversedBy: 'one_to_many_kitchensinks',
      },
      many_to_many_tags: {
        type: 'relation',
        relation: 'manyToMany',
        target: 'api::tag.tag',
        inversedBy: 'many_to_many_kitchensinks',
      },
      many_way_tags: { type: 'relation', relation: 'oneToMany', target: 'api::tag.tag' },
      morph_to_one: { type: 'relation', relation: 'morphToOne' },
      morph_to_many: { type: 'relation', relation: 'morphToMany' },
      cats: { type: 'dynamiczone', components: ['basic.relation', 'basic.simple'] },
      createdAt: { type: 'datetime' },
      updatedAt: { type: 'datetime' },
      publishedAt: { type: 'datetime', configurable: false, writable: true, visible: false },
      createdBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
      updatedBy: {
        type: 'relation',
        relation: 'oneToOne',
        target: 'admin::user',
        configurable: false,
        writable: false,
        visible: false,
        useJoinTable: false,
        private: true,
      },
    },
    modelType: 'contentType',
    modelName: 'kitchensink',
    connection: 'default',
    uid: 'api::kitchensink.kitchensink',
    apiName: 'kitchensink',
    globalId: 'Kitchensink',
    actions: {},
    lifecycles: {},
  },
  'api::homepage.homepage': {
    kind: 'singleType',
    collectionName: 'homepages',
    info: { displayName: 'Homepage', singularName: 'homepage', pluralName: 'homepages' },
    options: { draftAndPublish: true },
    pluginOptions: { i18n: { localized: true } },
    attributes: {
      title: { type: 'string', required: true, pluginOptions: { i18n: { localized: true } } },
      slug: {
        type: 'uid',
        targetField: 'title',
        required: true,
        pluginOptions: { i18n: { localized: true } },
      },
    },
  },
};
