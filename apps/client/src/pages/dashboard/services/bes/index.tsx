import ServiceHeader from '@client/components/dashboard/services/ServiceHeader';
import ServiceLayout from '../layout';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@client/components/ui/tabs';
import ServiceDocs from '@client/components/dashboard/services/ServiceDocs';
import ServiceOverview from '@client/components/dashboard/services/ServiceOverview';
import { useGetServiceMetaByTypeQuery } from '@client/api/services';
import ServiceInstances from '@client/components/dashboard/services/ServiceInstances';
import ServiceAPISandboxIndex from '@client/components/dashboard/services/sandbox';

const BESService = () => {
  const { data: { service = {} } = {} } = useGetServiceMetaByTypeQuery('bes');

  return (
    <ServiceLayout>
      <ServiceHeader type="bes" />
      {service.enabled ? (
        <Tabs defaultValue="overview" className="w-full pb-4">
          <TabsList className="grid w-max grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="instances">Instances</TabsTrigger>
            <TabsTrigger value="docs">Docs</TabsTrigger>
            <TabsTrigger value="sandbox">Sandbox</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-8">
            <ServiceOverview />
          </TabsContent>
          <TabsContent value="instances" className="mt-8">
            <ServiceInstances type="bes" />
          </TabsContent>
          <TabsContent value="docs" className="mt-8">
            <ServiceDocs type="bes" />
          </TabsContent>
          <TabsContent value="sandbox" className="mt-8">
            <ServiceAPISandboxIndex type="bes" />
          </TabsContent>
        </Tabs>
      ) : (
        <ServiceDocs type="bes" />
      )}
    </ServiceLayout>
  );
};

export default BESService;
