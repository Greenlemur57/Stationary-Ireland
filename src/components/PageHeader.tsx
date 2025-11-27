import {Content, PageSection} from "@patternfly/react-core";

export function PageHeader({ title, description }: { title: string, description?: string }) {
  return (
    <PageSection>
      <Content>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </Content>
    </PageSection>
  )
}