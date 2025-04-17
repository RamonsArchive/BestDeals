"use server";
import { prisma } from "@/lib/prisma";
import { parseServerActionResponse } from "./utils";

export const writeHeartedProduct = async (userId: string, productId: number) => {

  if (!userId) {
    return parseServerActionResponse({
        status: "ERROR",
        error: "No user id provided"
    })
  }
  if (!productId) {
    return parseServerActionResponse({
        status: "ERROR",
        error: "No product id provided"
    })
  }

  // First, find the user's internal ID based on the userId string
  const user = await prisma.user.findUnique({
    where: { userId },
    select: {
      id: true,
    }
  });
  
  if (!user) {
    return parseServerActionResponse({
        status: "ERROR",
        error: "No user found"
    })
  }
  
  // Create a new heart record or ignore if it already exists
  const result = await prisma.userHeartedProduct.upsert({
    where: {
      userId_productId: {
        userId: user.id,
        productId: productId
      }
    },
    update: {}, // No update needed if it exists
    create: {
      userId: user.id,
      productId,
    },
  });
  
  return parseServerActionResponse({
    ...result,
    status: "SUCCESS",
    message: "Product hearted successfully"
  });
};