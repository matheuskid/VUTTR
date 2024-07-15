--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE mathe;
ALTER ROLE mathe WITH NOSUPERUSER INHERIT NOCREATEROLE CREATEDB LOGIN NOREPLICATION NOBYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:M/qLpYFoUvfWqXvHRopP1g==$txZ9FvUsYWnztwiQ9AFj6H4wtfgDoFibxMVwOJz4/yg=:coNaaKfcvbxUvvcumTubiXc8cFlY2Legpmde+Sj4D9k=';
CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:LuIklHlI2+JE1jfFF8psgw==$WolLA6Qz0cnnTqc5Yy7uwz42+Lz8eTUFzN7Fw1oeIEs=:dKLb+fxiu4cmV0QKRawrrhOJY71ML5heG3lXjIoGmeo=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "vuttr" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: vuttr; Type: DATABASE; Schema: -; Owner: mathe
--

CREATE DATABASE vuttr WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE vuttr OWNER TO mathe;

\connect vuttr

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tools; Type: TABLE; Schema: public; Owner: mathe
--

CREATE TABLE public.tools (
    id integer NOT NULL,
    title character varying(30),
    link character varying(80),
    description character varying(150),
    tags character varying(20)[]
);


ALTER TABLE public.tools OWNER TO mathe;

--
-- Name: tools_id_seq; Type: SEQUENCE; Schema: public; Owner: mathe
--

CREATE SEQUENCE public.tools_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tools_id_seq OWNER TO mathe;

--
-- Name: tools_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: mathe
--

ALTER SEQUENCE public.tools_id_seq OWNED BY public.tools.id;


--
-- Name: tools id; Type: DEFAULT; Schema: public; Owner: mathe
--

ALTER TABLE ONLY public.tools ALTER COLUMN id SET DEFAULT nextval('public.tools_id_seq'::regclass);


--
-- Data for Name: tools; Type: TABLE DATA; Schema: public; Owner: mathe
--

COPY public.tools (id, title, link, description, tags) FROM stdin;
1	Notion	https://notion.so	All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.	{organization,planning,collaboration,writing,calendar}
2	json-server	https://github.com/typicode/json-server	Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.	{api,json,schema,node,github,rest}
3	fastify	https://www.fastify.io/	Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.	{web,framework,node,http2,https,localhost}
\.


--
-- Name: tools_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mathe
--

SELECT pg_catalog.setval('public.tools_id_seq', 3, true);


--
-- Name: tools tools_pkey; Type: CONSTRAINT; Schema: public; Owner: mathe
--

ALTER TABLE ONLY public.tools
    ADD CONSTRAINT tools_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

