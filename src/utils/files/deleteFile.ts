import fs from "fs";

export default function deleteFile(filePath: string): void {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Arquivo ${filePath} excluído com sucesso.`);
    } else {
      console.log(`O arquivo ${filePath} não existe.`);
    }
  } catch (error) {
    console.error(`Ocorreu um erro ao excluir o arquivo ${filePath}:`, error);
  }
}
