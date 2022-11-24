

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(255) NOT NULL DEFAULT 'CUSTOMER',
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)

INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(1, 'angel@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(2, 'fede@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(3, 'lau@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(4, 'eze@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(5, 'mati@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(6, 'brian@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(7, 'lean@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(8, 'jemi@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(9, 'briisa@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');
INSERT INTO "public"."users" ("id", "email", "password", "role", "created_at", "updated_at") VALUES
(10, 'fatima@gmail.com', '12345', 'CUSTOMER', '2022-11-23 02:41:51.802+00', '2022-11-23 02:41:51.803+00');

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS customers_id_seq;

-- Table Definition
CREATE TABLE "public"."customers" (
    "id" int4 NOT NULL DEFAULT nextval('customers_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "last_name" varchar(255) NOT NULL,
    "phone" varchar(255),
    "created_at" timestamptz NOT NULL,
    "update_at" timestamptz NOT NULL,
    "user_id" int4,
    CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(1, 'angel', 'arevalo', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 1);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(2, 'federico', 'salazar', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 2);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(3, 'lautaro', 'fernandez', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 3);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(4, 'ezequiel', 'lozano', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 4);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(5, 'matias', 'rimoldi', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 5);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(6, 'brian', 'alva', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 6);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(7, 'leandro', 'foutel', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 7);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(8, 'jemina', 'otaku', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 8);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(9, 'brisa', 'arevalo', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 9);
INSERT INTO "public"."customers" ("id", "name", "last_name", "phone", "created_at", "update_at", "user_id") VALUES
(10, 'fatima', 'alvarez', '1123451212', '2022-11-22 21:47:51.295+00', '2022-11-22 21:47:51.295+00', 10);
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS categories_id_seq;

-- Table Definition
CREATE TABLE "public"."categories" (
    "id" int4 NOT NULL DEFAULT nextval('categories_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "image" varchar(255) NOT NULL,
    "created_at" timestamptz NOT NULL,
    "update_at" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(1, 'vehiculos', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(2, 'supermercado', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(3, 'tecnologia', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(4, 'hogar y muebles', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(5, 'electrodomesticos', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(6, 'herramientas', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(7, 'deportes y fitnes', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(8, 'Moda', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(9, 'Salud', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
INSERT INTO "public"."categories" ("id", "name", "image", "created_at", "update_at") VALUES
(10, 'Belleza', 'http//localhost.com', '2022-11-22 21:48:14.555+00', '2022-11-22 21:48:14.555+00');
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS products_id_seq;

-- Table Definition
CREATE TABLE "public"."products" (
    "id" int4 NOT NULL DEFAULT nextval('products_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "image" varchar(255) NOT NULL,
    "description" text NOT NULL,
    "price" int4 NOT NULL,
    "category_id" int4,
    "created_at" timestamptz NOT NULL,
    "update_at" timestamptz NOT NULL,
    CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(1, 'Yogurt', 'http//localhost.com', 'Yogurt TheSerenicima', 400, 2, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(2, 'Leche', 'http//localhost.com', 'Leche TheSerenicima', 200, 2, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(3, 'Pan', 'http//localhost.com', 'Pan flauta', 500, 2, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(4, 'Auriculares', 'http//localhost.com', 'Auriculares Bluetooh', 1200, 3, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(5, 'Celular', 'http//localhost.com', 'Samsung x10s', 20000, 3, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(6, 'Sofa', 'http//localhost.com', 'Sofa cama', 200, 4, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(7, 'Pesas', 'http//localhost.com', 'mancuernas 10kg', 2900, 7, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(8, 'Remera', 'http//localhost.com', 'Remera negra gucci', 4200, 8, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(9, 'Ibuprofeno', 'http//localhost.com', 'Medicamento sin receta', 200, 9, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
INSERT INTO "public"."products" ("id", "name", "image", "description", "price", "category_id", "created_at", "update_at") VALUES
(10, 'Labial', 'http//localhost.com', 'Labial negro', 2200, 10, '2022-11-22 21:48:26.542+00', '2022-11-22 21:48:26.542+00');
-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orders_id_seq;

-- Table Definition
CREATE TABLE "public"."orders" (
    "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
    "customer_id" int4,
    "created_at" timestamptz NOT NULL,
    "update_at" timestamptz NOT NULL,
    CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "public"."customers"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(1, 1, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');
INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(2, 3, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');
INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(3, 5, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');
INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(4, 7, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');
INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(5, 2, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');
INSERT INTO "public"."orders" ("id", "customer_id", "created_at", "update_at") VALUES
(6, 1, '2022-11-23 03:36:00.588+00', '2022-11-23 03:36:00.588+00');

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS orders_products_id_seq;

-- Table Definition
CREATE TABLE "public"."orders_products" (
    "id" int4 NOT NULL DEFAULT nextval('orders_products_id_seq'::regclass),
    "amount" int4 NOT NULL,
    "order_id" int4,
    "product_id" int4,
    "created_at" timestamptz NOT NULL,
    "update_at" timestamptz NOT NULL,
    CONSTRAINT "orders_products_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "orders_products_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE SET NULL ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."orders_products" ("id", "amount", "order_id", "product_id", "created_at", "update_at") VALUES
(1, 3, 1, 2, '2022-11-23 13:20:32.725+00', '2022-11-23 13:20:32.725+00');
INSERT INTO "public"."orders_products" ("id", "amount", "order_id", "product_id", "created_at", "update_at") VALUES
(2, 4, 3, 5, '2022-11-23 13:20:32.725+00', '2022-11-23 13:20:32.725+00');