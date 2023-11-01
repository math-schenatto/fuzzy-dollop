import { UsersRepository } from "@/repositories/users-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface GetProfileRequest {
  userId: string;
}

interface GetProfileResponse {
  user: User;
}

export class GetUserProfileUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({ userId }: GetProfileRequest): Promise<GetProfileResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user,
    };
  }
}
