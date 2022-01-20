import { Meta, Story } from "@storybook/angular";

import { ExampleComponent } from "projects/shared-components/src/lib/Example/example.component";

export default {
    title: 'Example',
    component: ExampleComponent
} as Meta

const Template: Story = (args) => ({
    props: args
})

// Default Story
export const Default = Template.bind({});
Default.args = {
    exInput: 'This arg comes from Storybook Example.stories.ts'
}

export const AnotherStory = Template.bind({});
AnotherStory.args = {
    exInput: 'This a second story'
}