import Modal from '@/components/Modal'
import ProfileForm from '@/components/ProfileForm'
import { getCurrentUser } from '@/lib/session'
import { redirect } from 'next/navigation'

interface Props {}
const CreateProject = async (props: Props) => {
  const session = await getCurrentUser()

  if (!session?.user) redirect('/')

  return (
    <Modal>
      <h3 className="modal-head-text">Create a New Project</h3>

      <ProfileForm type="create" session={session} />
    </Modal>
  )
}
export default CreateProject
