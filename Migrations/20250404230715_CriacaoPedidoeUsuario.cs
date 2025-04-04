using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace marmitariaLeozitos.Migrations
{
    /// <inheritdoc />
    public partial class CriacaoPedidoeUsuario : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "valor",
                table: "Marmita",
                newName: "Valor");

            migrationBuilder.RenameColumn(
                name: "descricao",
                table: "Marmita",
                newName: "Descricao");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Marmita",
                newName: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Valor",
                table: "Marmita",
                newName: "valor");

            migrationBuilder.RenameColumn(
                name: "Descricao",
                table: "Marmita",
                newName: "descricao");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Marmita",
                newName: "id");
        }
    }
}
