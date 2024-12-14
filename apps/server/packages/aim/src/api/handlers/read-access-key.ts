import { HandlerFunction, ValidatorFunction } from '@/types/handler';
import { AppError, CommonErrors } from '@/utils/errors';
import { parseFRN, validateFRNForServiceAndResourceType } from '@/utils/frn';
import AimAccessKey from '@aim/models/access-key';
import ManagedUser from '@aim/models/managed-user';
import { IAccessKey } from '@sharedtypes/aim/access-key';
import { IManagedUser } from '@sharedtypes/aim/managed-user';
import { Model } from 'mongoose';

export const validator: ValidatorFunction<string, null> = (resource) => {
  return validateFRNForServiceAndResourceType(resource, 'aim', 'user');
};

const handlerWithoutDeps =
  (
    managedUserModel: Model<IManagedUser>,
    accessKeyModel: Model<IAccessKey>,
  ): HandlerFunction<string, null> =>
  async (resource, _, context) => {
    const { accountId } = context.user;
    const { resourceId: alias } = parseFRN(resource);

    const foundManagedUser = await managedUserModel.findOne({
      account: accountId,
      alias,
    });
    if (!foundManagedUser) {
      throw new AppError(
        CommonErrors.NotFound.name,
        CommonErrors.NotFound.statusCode,
        `Managed user not found`,
      );
    }

    const accessKey = await accessKeyModel.findOne({
      user: foundManagedUser._id,
    });
    if (!accessKey) {
      throw new AppError(
        CommonErrors.NotFound.name,
        CommonErrors.NotFound.statusCode,
        `Access key not generated for the user. Please generate an access key first`,
      );
    }

    return { accessKey };
  };

const handler = handlerWithoutDeps(ManagedUser, AimAccessKey);

export const name = 'ReadAccessKey';
export default handler;