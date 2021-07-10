import "./index.scss" 
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"


wp.blocks.registerBlockType("ourplugin/are-you-paying-atteintion", {
 title: "Are You Paying Attention?",
 icon: "smiley",
 category: "common",
 attributes: {
    skyColor: {type: "string"},
    grassColor: {type: "string"}
 },
 edit: EditComponent,
 save: function (props) {
    return null
  }
})

function EditComponent (props) {
  function updateSkyColor(event) {
    props.setAttributes({skyColor: event.target.value})
  }

  function updateGrassColor(event) {
    props.setAttributes({grassColor: event.target.value})
  }

  return (
   <div className="paying-attention-edit-block">
      <TextControl label="Question:" />
      <p>Answers: </p>
      <Flex>
        <FlexBlock>
          <TextControl />
        </FlexBlock>
        <FlexItem>
          <button>
            <Icon icon="star-empty" />
          </button>
        </FlexItem>
        <FlexItem>
          <button>Delete</button>
        </FlexItem>
      </Flex>
   </div>
  )
}