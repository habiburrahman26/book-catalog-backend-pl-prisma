import prisma from '../../../shared/prisma'

const userSelectedFields = {
  id: true,
  name: true,
  email: true,
  role: true,
  contactNo: true,
  address: true,
  profileImg: true,
  createdAt: true,
  updatedAt: true,
}

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: userSelectedFields,
  })
  return result
}

const getUserById = async (id: string) => {
  const result = await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: userSelectedFields,
  })
  return result
}

export const UserService = {
  getAllUser,
  getUserById,
}
