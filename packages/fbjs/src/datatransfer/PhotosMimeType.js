/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule PhotosMimeType
 */
const PhotosMimeType = {
  isImage(mimeString) {
    return getParts(mimeString)[0] === 'image';
  },

  isJpeg(mimeString) {
    const parts = getParts(mimeString);
    return (
      PhotosMimeType.isImage(mimeString) &&
      // see http://fburl.com/10972194
      (parts[1] === 'jpeg' || parts[1] === 'pjpeg')
    );
  },
};

function getParts(mimeString) {
  return mimeString.split('/');
}

module.exports = PhotosMimeType;
