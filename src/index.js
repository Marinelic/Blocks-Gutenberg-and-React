import "./index.scss" 
import {TextControl, Flex, FlexBlock, FlexItem, Button, Icon} from "@wordpress/components"


wp.blocks.registerBlockType("ourplugin/are-you-paying-atteintion", {
 title: "Are You Paying Attention?",
 icon: "smiley",
 category: "common",
 attributes: {
    question: {type: "string"},
    answers: {type: "array", default: ["red", "blue"]}
 },
 edit: EditComponent,
 save: function (props) {
    return null
  }
})

function EditComponent (props) {

  function updateQuestion(value) {
    props.setAttributes({question: value})
  }

  return (
   <div className="paying-attention-edit-block">
      <TextControl label="Question:" value={props.attributes.question} onChange={updateQuestion} style={{fontSize: "20px"}} />
      <p style={{fontSize: "13px", margin: "20px o 8px 0"}}>Answers: </p>
      {props.attributes.answers.map(function (answer) {
        return (
          <Flex>
        <FlexBlock>
          <TextControl value={answer}/>
        </FlexBlock>
        <FlexItem>
          <Button>
            <Icon className="mark-as-correct" icon="star-empty" />
          </Button>
        </FlexItem>
        <FlexItem>
          <Button isLink className="attention-delete">Delete</Button>
        </FlexItem>
      </Flex>
        )
      })}
      <Button isPrimary>Add another answer</Button>
   </div>
  )
}