import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";
import BlobStorageMixin "blob-storage/Mixin";

actor Backend {
  var accessControlState : AccessControl.AccessControlState = AccessControl.initState();

  include MixinAuthorization(accessControlState);
  include BlobStorageMixin();
};
