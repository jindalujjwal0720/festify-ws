import KeyValueList from '@client/components/custom/KeyValueList';
import { UpdateCreds } from '../../dialogs/UpdateCreds';
import { Button } from '@client/components/ui/button';

const CredsDetails = ({
  type,
  creds,
}: {
  type: string;
  creds: Record<string, any>;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <KeyValueList title="Creds" data={creds} keys={getKeysByType(type)} />
      <div className="flex flex-row-reverse mt-2">
        <UpdateCreds
          type={type}
          trigger={<Button>Update Creds</Button>}
          instanceId={creds?.instance}
          defaultValue={creds}
        />
      </div>
    </div>
  );
};

const getKeysByType = (type: string) => {
  switch (type) {
    case 'bes':
      return getKeysForBES();
    case 'ts':
      return getKeysForTS();
    default:
      return [];
  }
};

const getKeysForBES = () => {
  return [
    {
      key: 'email',
      label: 'Email',
    },
    {
      key: 'password',
      label: 'Password',
      formatter: () => {
        return (
          <span className="text-sm text-muted-foreground">
            hidden for seurity reasons
          </span>
        );
      },
    },
    {
      key: 'smtpHost',
      label: 'SMTP Host',
    },
    {
      key: 'smtpPort',
      label: 'SMTP Port',
    },
  ];
};

const getKeysForTS = () => {
  return [
    {
      key: 'token',
      label: 'Token',
    },
  ];
};

export default CredsDetails;
