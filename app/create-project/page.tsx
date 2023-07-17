import Modal from '@/components/Modal'
import ProfileForm from '@/components/ProfileForm'

interface Props {}
const CreateProject = (props: Props) => {
  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProfileForm />
    </Modal>
  )
}
export default CreateProject
