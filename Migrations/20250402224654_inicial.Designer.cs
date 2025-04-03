﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using marmitariaLeozitos.Data;

#nullable disable

namespace marmitariaLeozitos.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20250402224654_inicial")]
    partial class inicial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("marmitariaLeozitos.Models.Marmita", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("descricao")
                        .HasColumnType("longtext");

                    b.Property<decimal?>("valor")
                        .HasColumnType("decimal(65,30)");

                    b.HasKey("id");

                    b.ToTable("Marmita");
                });
#pragma warning restore 612, 618
        }
    }
}
