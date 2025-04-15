-- CreateTable
CREATE TABLE `items6` (
    `id` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NULL,
    `description` TEXT NULL,
    `location` VARCHAR(255) NULL,
    `link` TEXT NULL,
    `new_price_column` DECIMAL(10, 2) NULL,
    `deal` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
